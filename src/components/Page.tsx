import { Container } from "@mui/system";
import { PropsWithChildren } from "react";
import theme from "../util/theme";


export const Page = (props: PropsWithChildren) => {
    return (
        <Container sx={{
            paddingTop: (theme) => theme.spacing(3)
        }}>
            {props.children}
            </Container>
    )
}