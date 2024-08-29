import { Footer, FooterCopyright, FooterLinkGroup } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
export function MyFooter() {
    return (
        <Footer container className="mt-12">
            <FooterCopyright href="/" by="Vincent Liu" year={2023} />
            <FooterLinkGroup className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="https://github.com/GitBugKing" icon={BsGithub} target="_blank" />
            </FooterLinkGroup>
        </Footer>
    );
}
