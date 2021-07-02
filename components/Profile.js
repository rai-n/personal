import profileStyle from "../styles/Profile.module.css";
import { Container, FormHelperText } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LangItem from "../components/LangItem";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: "100%",
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
    width: 1000,
   
    
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: "35px",
    width: "100%",
    objectFit: "cover",
  },
  
  languageContainer: {
    maxWidth: 200,
  }
}));

const Profile = ({ profile }) => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // console.log(Object.entries(profile.ranks.languages).map(item => item[0]));

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.codewars.com/users/neerio/badges/large"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {profile.username}
            </Typography>
            <Divider variant="top" />
            <Typography variant="body2" color="textSecondary" component="p">
              <div role="text">
                <div>
                  {" "}
                  I am currently #{profile.leaderboardPosition} on the
                  leaderboard. I have completed over{" "}
                  {profile.codeChallenges.totalCompleted} katas and mainly use:
                </div>
              </div>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider variant="middle" />
        <CardActions>
          <Link
            aria-label=" View profile on CodeWars (Opens in another"
            size="small"
            color="primary"
            component="button"
          >
            VIEW PROFILE
          </Link>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
        </CardActions>
      </Card>
      <div className={classes.wrapper}>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <h2 className={profileStyle.title} >Language experience (in detail):</h2>
            <p>Clan: {profile.clan}</p>
            <dl>
              {/*Sorted by decreasing overall score*/}
              {Object.entries(profile.ranks.languages).sort((a,b) => {return b[1].score - a[1].score; }).map((item) => (
                <Card className={profileStyle.languages}>
                  <CardContent className={profileStyle.item}>
                    <Typography className={classes.languageContainerTitle} variant="h4" component="h2">
                      <dt>{item[0]}</dt>
                    </Typography>
                    <Typography variant="body">
                      <dd>
                        {item[1].name}
                        <br />
                        Overall Score: {item[1].score}
                      </dd>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </dl>
          </Paper>
        </Slide>
      </div>
    </Grid>
  );
};

export default Profile;
