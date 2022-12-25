import React from 'react';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCommentIcon from '@mui/icons-material/AddComment';

export const SideBardata = [
    {
        title: "DashBoard",
        Icon: <GridViewIcon/>,
        link: "/dashboard"
    },

    {
        title: "Product catalog",
        Icon: <ListTwoToneIcon/>,
        link: "/catalog"
    },

    {
        title: "Catalog management",
        Icon: <ManageAccountsTwoToneIcon/>,
        link: "/management"
    },

    {
        title: "Coupons",
        Icon: <LocalOfferIcon/>,
        link: "/coupons"
    },

    {
        title: "Feedback",
        Icon: <AddCommentIcon/>,
        link: "/feedback"
    }
]