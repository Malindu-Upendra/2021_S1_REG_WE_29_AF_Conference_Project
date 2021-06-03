import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(-35),
        marginLeft:theme.spacing(40),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typography:{
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(1),
    },
    text1:{
        width:80,

    },

    text2:{
        marginLeft:-335,
        width:200,

    },
    text3:{
        marginLeft:285,
        marginTop:-72,
        width:200,

    },
    text4:{
        width:485,
        marginTop:-30,

    },

    text5:{
        width:485,

    },

    root: {
        marginLeft:350,
        width:850,
        marginTop:130,
        marginRight:50,
        height:500,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 6,
    },
    root1:{
        width:850,
        height:60,

    },
    root3:{
        width:160,
        height:160,
        marginTop:80,
        marginLeft:80,


    },
    root4:{
        width:'100%',
        height:'100%',
    },
    root5:{
        marginLeft:115,
        width:100,
        height:50,
        marginTop:5,
        fontSize:15,

    }


}));
