
const Post = require("../models/Post")



// CREAR 

exports.createPost = async (req, res)=>{
    try{
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

// OBTENER TODOS 

exports.getAllPosts = async (req,res)=>{
    const posts = await Post.find()
    res.json(posts)
}


// OBTENER MEDIANTE ID

exports.getPostById = async (req,res)=>{
    const post = await Post.findById(req.params._id)
    res.json(post)
}

// OBTENER MEDIANTE EL NOMBRE DEL TITULO

exports.getPostByTitle = async (req,res) =>{
    const post = await Post.findOne({title: req.params.title})
    res.json(post)
}

//ACTUALIZAR MEDIANTE ID
  
exports.updatePost= async (req,res) => {
    const post = await Post.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true}
    )
    res.json(post)
}

//BORRAR MEDIANTE ID

exports.deletePost = async (req,res) =>{
    await Post.findByIdAndDelete(req.params._id)
    res.json({message: "Post borrado"})
}

//PAGINACION

exports.postWithPagination = async (req,res) =>{
    const page = parseInt(req.query.page) || 1
    const limit = 10

    const post = await Post.find()
        .skip((page -1) * limit)
        .limit(limit)

    res.json(posts)
}











