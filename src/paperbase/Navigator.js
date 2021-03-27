import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'Game',
    children: [
      { id: 'Home', icon: <PeopleIcon />, index: 0, active: false, path: '' },
      { id: 'Coming Soon', icon: <DnsRoundedIcon /> , index: 1, active: false, path: 'comingSoon' },
    ],
  },
  {
    id: 'Others',
    children: [
      { id: 'Usage', icon: <SettingsIcon />,  index: 2, active: false, path: 'usage' },
      { id: 'Contact', icon: <TimerIcon />,  index: 3, active: false, path: 'contact' },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  /* 
    ページ選択制御部
  */
  
  /*   
  const activateSwitch = (oldIndex, newIndex) => {
    
    // 元の選択箇所を非activeにする
    categories.children.active = false;
    categories.children.index === oldIndex;

    // 新しい選択箇所をactiveにする
    categories.children.active = true;
    categories.children.index === oldIndex;
    
  };
  */

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    
    /* activateSwitch(selectedIndex, index); */

    setSelectedIndex(index);

    // activate

  };

  const basePath = '/material-ui-paperbase-demo/';

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>

        {/* 
          タイトル
         */}
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Among Us Helper
        </ListItem>

         {/* 
          実際のNavi
          Page選択部分
         */}
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, index, active, path }) => (

              <Link to={basePath + path}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>

            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
