
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SekImage from './info.png';

const useStyles = makeStyles({
    root:{
        maxWidth: 345,
    },
});

function Styling() {
    
   const classes = useStyles();

   //Variable fürs Anpassen von der Höhe der Karten
   const height = 100;
  
  
    return (
    <div>

        <Container fluid>
            <Row>
                <Col>
                <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height= {height}
                    image={SekImage}
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
             </Card>
             </Col>
            </Row>

            <Row>
                <Col>
                <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
             </Card>
             </Col>
            </Row>

            <Row>
                <Col>
                <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image="/public/info.png"
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            </Col>
            <Col>
            <Card className ={classes.root}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    alt= "Sekretariat"
                    height={height}
                    image={require("./logo.svg")}
                    title="Info Point"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier werden Sie fündig wo sich der Info Point befindet.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
             </Card>
             </Col>
            </Row>
       </Container>
        

    </div>
  );
}

export default Styling;
