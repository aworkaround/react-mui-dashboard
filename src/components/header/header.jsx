import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="primary">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<ArrowCircleRightIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
