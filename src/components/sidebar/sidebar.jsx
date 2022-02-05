import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpeedIcon from "@mui/icons-material/Speed";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import { createTheme } from "@mui/material";
import { teal, lightBlue } from "@mui/material/colors";
import { red, blue, orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material";
const customTheme = createTheme({
	palette: {
			primary: teal,
			secondary: lightBlue,
	},
});

let drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function Sidebar() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<ThemeProvider theme={customTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar position="fixed" open={open} color='primary'>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{
								marginRight: "36px",
								...(open && { display: "none" }),
							}}>
							<ArrowCircleRightIcon />
						</IconButton>
						<Typography variant="h6" id="brand" className="text-teal-200 hover:text-teal-100 hover:cursor-pointer" noWrap component="div">
							TECHAWARE
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						<ListItem button key="Dashboard" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
							<ListItemIcon>
								<SpeedIcon fontSize="large" sx={{ color: teal[500] }} />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>
						<Divider />
						<ListItem button key="i1" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
							<ListItemIcon>
								<GppMaybeOutlinedIcon fontSize="large" sx={{ color: red[500] }} />
							</ListItemIcon>
							<ListItemText primary="Item A" />
						</ListItem>
						<ListItem button key="i2" selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
							<ListItemIcon>
								<GppMaybeOutlinedIcon fontSize="large" sx={{ color: orange[500] }} />
							</ListItemIcon>
							<ListItemText primary="Item B" />
						</ListItem>
						<ListItem button key="i3" selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
							<ListItemIcon>
								<GppMaybeOutlinedIcon fontSize="large" sx={{ color: blue[500] }} />
							</ListItemIcon>
							<ListItemText primary="Item C" />
						</ListItem>
					</List>
					<Divider />
					<List>
						{["All mail", "Trash", "Spam"].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
						facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
						donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue
						eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
						tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
						sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam
						sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
						maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
