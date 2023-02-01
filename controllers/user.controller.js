const UserModel =require('../models/user.model');
const ObjectID =require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req,res)=> {
    
    const users = await UserModel.find().select('-password');
    res.status(200).json(users)

}

module.exports.userInfo=(req, res)=>{
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu : ' + req.params.id)


    UserModel.findById(req.params.id, (err,docs)=>{
        if(!err) res.send(docs);
        else console.log('ID inconnu : ' + err );
    }).select('-password');
}

module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID inconnu : ' + req.params.id)

    try {
        const doc = await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        if(!doc) return res.status(404).send("Aucun utilisateur trouvé avec l'id spécifié");
        return res.send(doc);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.deleteUser= async(req,res)=>{
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('Id inconnu :' + req.params.id)

    try{
        await UserModel.remove({ _id: req.params.id}).exec();
        res.status(200).json({message : " ok supression"});

    }catch (err){

        return res.status(500).json({message:err})
    }

}


module.exports.follow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow))
        return res.status(400).send('ID inconnu :' + req.params.id)

    try {
        //ajouter follower dans liste
        const doc = await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow } },
            { new: true, upsert: true }
        );
        if (!doc) return res.status(404).send("Aucun utilisateur trouvé avec l'id spécifié");
        else res.status(201).json(doc);

        //add to following list
        const doc2 = await UserModel.findByIdAndUpdate(
            req.body.idToFollow,
            { $addToSet: { followers: req.params.id } },
            { new: true, upsert: true }
        );
        if (!doc2) return res.status(404).send("Aucun utilisateur à suivre trouvé avec l'id spécifié");
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.unfollow= async(req,res)=>{
    if(!ObjectID.isValid(req.params.id) ||  !ObjectID.isValid(req.body.idToUnFollow))
    return res.status(400).send('ID inconnu :' + req.params.id)
    try {
        //supprimer follower de la liste
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { following: req.body.idToUnFollow } },
            { new: true }
        );
    
        //supprimer de la liste de followers
        await UserModel.findByIdAndUpdate(
            req.body.idToUnFollow,
            { $pull: { followers: req.params.id } },
            { new: true }
        );
        res.status(201).send("Unfollow effectué avec succès");
    } catch (err) {
        return res.status(500).json({ message: err });
    }
   
}