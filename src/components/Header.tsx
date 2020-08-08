import React from "react";
import { IHeaderProps } from "../types/pages";
import { Grid, Button, Box, Paper, Typography } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";
import Photo from "../assets/Parveen.jpg";

const Header = (props: IHeaderProps) => {
  return (
    <Paper square elevation={0}>
      <Box padding={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <Grid container  spacing={1}>
              <Grid item xs={12} sm={1}>
                <Avatar alt="Parveen Gupta" src={Photo} />
              </Grid>
              <Grid item xs={12} sm={11}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h3" color="primary">
                      {props.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="overline">
                      {props?.designation}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <PhoneAndroidIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1"> {props.phone}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} spacing={1}>
                <Grid container>
                  <Grid item xs={1}>
                    <EmailIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">{props.email}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} spacing={1}>
                <Grid container>
                  <Grid item xs={1}>
                    <GitHubIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">{props?.githubURL}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} spacing={1}>
                <Grid container>
                  <Grid item xs={1}>
                    <LinkedInIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      {props?.linkedInURL}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Header;
