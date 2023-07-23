import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Form from 'react-bootstrap/Form';
import { getFormatedStringFromDays } from '../utils/utils'
//zustand 
import useStore from "../zustand";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        // badgeContent={props.commentsA}
        expandIcon={
            <Badge color="primary">
                <ChatIcon color="action" />
            </Badge>
        }
        {...props}

        style={{ backgroundColor: '#ffffff' }}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "0px solid rgba(0, 0, 0, .125)",
    borderColor: "rgba(255, 255, 255, .)"
}));


export default function MyPosts() {
    const router = useRouter();
    const handleCloseDelete = () => openDelete(false);

    const [openDel, openDelete] = useState(false);

    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);

    const [post, setPost] = useState('');

    const [postsdata, setPostDatas] = useState([]);
    const [postsLikes, setPostlikes] = useState([]);

    const [expanded, setExpanded] = useState("panel1");

    //zustand
    const iLike = useStore(state => state.iLike);
    const whenRemoveILike = useStore(state => state.whenRemoveILike);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        getComments(panel);
    };


    //Post function
    const handleNewPost = async () => {
        const userData = {
            "description": post,
            "userId": parseInt(localStorage.getItem('id'))
        };

        try {
            let response = await fetch('http://localhost:3001/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });

            let responseDecoded = await response.json()

            if (responseDecoded.message) {
                toast.warn("Hubo un error");
            } else {
                toast.success('Has echo una nueva publicación');
                setPost('');
                await getPosts();
            }


        } catch (error) {
            toast.warn("Hubo un error");
        }

    }

    const [postIdDelete, setPostIdDelete] = useState()

    //Delete post function
    const handleDeletePost = async () => {
        try {
            let deleteResponse = await fetch('http://localhost:3001/posts/delete-post/' + postIdDelete, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            let deleteResponseDecoded = await deleteResponse.json()

            if (deleteResponseDecoded.message) {
                toast.warn("Hubo un error");
            } else {
                toast.success('Has eliminado la publicación');
                setPost('');
                openDelete(false);
                await getPosts();
            }
        } catch (error) {
            toast.warn("Hubo un error");
        }

    }

    const [comment, setcomment] = useState('');
    const [comments, setcomments] = useState([]);

    //handle comment posts
    const handleNewComment = async (postId) => {
        const userData = {
            "comment": comment,
            "postId": postId,
            "userId": parseInt(localStorage.getItem('id'))
        };

        try {
            let response = await fetch('http://localhost:3001/comments', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });

            let responseDecoded = await response.json()

            if (responseDecoded.message) {
                toast.warn("Hubo un error");
            } else {
                toast.success('Has escrito un comentario');
                await getComments(postId);
                setcomment('');
            }


        } catch (error) {
            toast.warn("Hubo un error");
        }

    }



    const getComments = async (postId) => {
        const userData = {
            "postId": postId,
        };
        try {
            let response = await fetch('http://localhost:3001/comments/filter', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });
            let responseData = await response.json();

            if (responseData.message) {
            } else {
                setcomments(responseData)
            }
        } catch (error) {
            toast.warn("Hubo un error al traer los comentarios");
        }

    }
    const [countComments, setCountComments] = useState([]);

    const CountComments = async (postId) => {
        const userData = {
            "postId": postId,
        };
        try {
            let response = await fetch('http://localhost:3001/comments/filter', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });
            let responseData = await response.json();

            if (responseData.message) {
            } else {
                setCountComments(responseData);
            }
        } catch (error) {
            // toast.warn("Hubo un error al traer los comentarios");
        }

    }

    const handlePostLikes = async (postId) => {
        const userData = {
            "likes": true,
            "postId": postId,
            "userId": parseInt(localStorage.getItem('id'))
        };
        try {
            let response = await fetch('http://localhost:3001/posts-likes', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });

            let responseDecoded = await response.json()

            if (responseDecoded.message) {
                toast.warn("Hubo un error");
            } else {
                if (responseDecoded.post == "Se Agrego a los que te gusta") {
                    toast.success('Se agrego a los que te gustan');
                } else {
                    toast.warn('Se quito de los que te gustan');
                }
                await getPosts();
                await getPostsLikes();
                iLike();
            }

        } catch (error) {
            toast.warn("Hubo un error");
        }

    }

    const [postIdUpdate, setPostIdUpdate] = useState()

    const [postDescriptionUpdate, setPostDescriptionUpdate] = useState()




    const handleCloseDel = (id) => {
        setPostIdDelete(id)

        openDelete(true);
    }

    const handleOpen = (id,
        description) => {
        setPostIdUpdate(id)
        setPostDescriptionUpdate(description)

        setOpen(true);
    }

    //handle update posts
    const postUpdate = async () => {
        const userData = {
            "description": postDescriptionUpdate,
            "postId": postIdUpdate
        };

        try {
            let updatePostResponse = await fetch('http://localhost:3001/posts/update', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });

            let updatePostResponseDecoded = await updatePostResponse.json()

            if (updatePostResponseDecoded.message) {
                toast.warn("Hubo un error");
            } else {
                toast.success('Has actualizado el comentario');
                getPosts();
                setOpen(false);
                setPost('');
            }


        } catch (error) {
            toast.warn("Hubo un error");
        }

    }

    const getPosts = async () => {
        const userData = {
            "userId": parseInt(localStorage.getItem('id'))
        };
        try {
            let response = await fetch('http://localhost:3001/posts/my-posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(userData)
            });
            let responseData = await response.json();

            if (responseData.message) {
            } else {
                setPostDatas(responseData)
            }
        } catch (error) {
            toast.warn("Hubo un error al traer las publicaciones");
        }

    }


    const getPostsLikes = async () => {
        try {
            let response = await fetch('http://localhost:3001/posts-likes', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            let responseData = await response.json();

            if (responseData.message) {
            } else {
                setPostlikes(responseData)
            }
        } catch (error) {
            toast.warn("Hubo un error al traer las publicaciones");
        }

    }

    const findMyLikes = (likeId) => {
        const search = what => postsLikes.find(element => element.postId === what && element.likes === true && element.userId == parseInt(localStorage.getItem('id')));
        if (search(likeId)) {
            return <FavoriteIcon sx={{ color: 'red' }} />;
        } else {
            return <FavoriteIcon />;
        }

    }

    useEffect(() => {
        getPosts();
        getPostsLikes();
    }, [whenRemoveILike]);


    return (
        <div>
            <TextField
                id="standard-multiline-static"
                label="Di algo"
                multiline
                rows={4}
                variant="standard"

                style={{ minWidth: '100%' }}

                onChange={post => setPost(post.target.value)}
                value={post}
            />
            <br></br>
            <br></br>
            <Button variant="contained" style={{ backgroundColor: '#1785E1', color: '#ffffff', borderRadius: 50, width: '90%' }} onClick={handleNewPost}>
                Publicar
            </Button>
            <br></br>
            <br></br>
            {
                postsdata.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card sx={{ minWidth: 275 }}>
                                <Button variant="contained" style={{ float: 'right', backgroundColor: '#ff4081', color: '#ffffff', borderRadius: 50, width: '19%', marginLeft: '5px' }} onClick={() => handleCloseDel(data.id)}>
                                    Eliminar
                                </Button>
                                <Button variant="contained" style={{ float: 'right', backgroundColor: '#448aff', color: '#ffffff', borderRadius: 50, width: '19%' }} onClick={() => handleOpen(data.id, data.description)}>
                                    Editar
                                </Button>

                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: '#1785E1' }} aria-label="recipe">
                                            <Avatar alt="Remy Sharp" src={data.users.avatar} />

                                            {/* {data.users.fullname.charAt(0)} */}
                                        </Avatar>
                                    }
                                    title={data.users.fullname}
                                    subheader={getFormatedStringFromDays(data.createdAt)}


                                />
                                <CardContent>
                                    {/* <Typography variant="h5" component="div">
                                        {data.users.fullname}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        hace {getFormatedStringFromDays(data.createdAt)}
                                    </Typography> */}
                                    <Typography variant="body2">
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="add to favorites" onClick={() => handlePostLikes(data.id)}>
                                        {

                                            (postsLikes) ?
                                                (
                                                    findMyLikes(data.id)
                                                ) :
                                                (
                                                    <FavoriteIcon />
                                                )

                                        }

                                    </IconButton>

                                    <Accordion
                                        expanded={expanded === data.id}
                                        onChange={handleChange(data.id)}
                                        style={{ border: '0px solid', borderColor: '#ffffff' }}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel1d-content"
                                            id="panel1d-header"
                                        // commentsA={0}
                                        ></AccordionSummary>
                                        <AccordionDetails>
                                            <TextField
                                                id="standard-multiline-static"
                                                label="Comentar"
                                                multiline
                                                rows={4}

                                                variant="standard"
                                                style={{ width: '100%' }}
                                                onChange={comment => setcomment(comment.target.value)}
                                                value={comment}
                                            />
                                            <br></br>
                                            <br></br>
                                            <Button variant="contained" style={{ backgroundColor: '#1785E1', color: '#ffffff', borderRadius: 50, width: '100%' }} onClick={() => handleNewComment(data.id)}>
                                                Comentar
                                            </Button>
                                            <br></br>
                                            <br></br>
                                            <h5>Comentarios</h5>
                                            {
                                                comments.map((data) => {
                                                    return (
                                                        <div>
                                                            <Card sx={{ minWidth: 275 }}>
                                                                <CardHeader
                                                                    avatar={
                                                                        <Avatar sx={{ bgcolor: '#1785E1' }} aria-label="recipe">
                                                                            <Avatar alt="Remy Sharp" src={data.users.avatar} />

                                                                            {/* {data.users.fullname.charAt(0)} */}
                                                                        </Avatar>
                                                                    }
                                                                    title={data.users.fullname}
                                                                    subheader={getFormatedStringFromDays(data.createdAt)}
                                                                />
                                                                <CardContent>
                                                                    {/* <Typography variant="h5" component="div">
                                                                        {data.users.fullname}
                                                                    </Typography>
                                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                        hace {getFormatedStringFromDays(data.createdAt)}
                                                                    </Typography> */}
                                                                    <Typography variant="body2">
                                                                        {data.comment}
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                            <br></br>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </AccordionDetails>
                                    </Accordion>
                                </CardActions>
                            </Card>
                            <br></br>
                        </div>
                    )
                })
            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Form style={{ backgroundColor: '#ffffff', height: '40%', borderRadius: 30 }}>
                        <TextField
                            id="standard-multiline-static"
                            label="Editando"
                            multiline
                            rows={4}
                            variant="standard"

                            style={{ minWidth: '100%' }}


                            onChange={post => setPostDescriptionUpdate(post.target.value)}
                            value={postDescriptionUpdate}
                        />
                        <br></br>
                        <br></br>
                        <Button style={{ backgroundColor: '#1785E1', color: '#ffffff', borderRadius: 50, width: '90%' }} onClick={() => postUpdate()} >Actualizar</Button>
                    </Form>
                </Box>
            </Modal>

            <Modal
                open={openDel}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Form style={{ backgroundColor: '#ffffff', height: '40%', borderRadius: 30 }}>
                        <p>Seguro que quieres eliminar la publicación?</p>
                        <br></br>
                        <Button style={{ backgroundColor: '#1785E1', color: '#ffffff', borderRadius: 50, width: '90%' }} onClick={() => handleDeletePost()} >Si</Button>
                    </Form>
                </Box>
            </Modal>
        </div>
    )
}
