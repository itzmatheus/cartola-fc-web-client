import { AppBar, Avatar, Box, Button, ButtonProps, Chip, Toolbar } from "@mui/material";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import logo from '../../public/img/logo.png';

export type NavbarItemProps = LinkProps & {showUnderline: boolean};

export const NavbarItem = (props: PropsWithChildren<NavbarItemProps>) => {

    const { showUnderline, ...linksProps } = props;

    return (
        //@ts-expect-error
        <Button component={Link} sx={{
                color: "white",
                display: 'inline-block',
                textAlign: 'center',
                '&::after': (theme) => ({
                    content: '""',
                    borderBottom: showUnderline ? `4px solid ${theme.palette.primary.main}` : `4px solid transparent`,
                    width: '100%',
                    display: 'block',
                })
            }} {...linksProps}
        />
    )
}
 
export const Navbar = () => {

    const router = useRouter(); 

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={
                {
                    background: 'none',
                    boxShadow: 'none'
                }
            }>
                <Toolbar>
                    <Image src={logo} alt='Logo Cartola FC' width={315} height={58} priority={true}/>
                    <Box sx={{flexGrow:1, ml: (theme) => theme.spacing(4)}}>
                        <NavbarItem showUnderline={router.pathname === '/'} href='/'>Home</NavbarItem>
                        <NavbarItem showUnderline={router.pathname === '/players'} href='/players'>Escalação</NavbarItem>
                        <NavbarItem showUnderline={['/matches', '/matches/[id]'].includes(router.pathname)} href='/matches'>Jogos</NavbarItem>
                    </Box>
                    <Chip
                        label={300}
                        avatar={<Avatar>R$</Avatar>}
                        color='secondary'
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
};