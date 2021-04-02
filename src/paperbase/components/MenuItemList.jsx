import { MenuItem } from '@material-ui/core';
import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';





const MenuItemList = (props) => {

    // 数値の配列を取得
    const numbers = props.numbers;
    
    const menuItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
        <MenuItem
            key={number.toString()}
            value={number}
        >
            {number.toString()}
        </MenuItem>
      
    );

    console.log(menuItems);
    return (
        menuItems
        
    );
  };

export default MenuItemList;
