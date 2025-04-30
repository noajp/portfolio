import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import HomePage from "../app/page";

describe("HomePage", () => {
    it("renders the main sections and buttons", () => {
        render(<HomePage />);

        // Check if navigation buttons are rendered
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Pictures")).toBeInTheDocument();
        expect(screen.getByText("Clips")).toBeInTheDocument();
        expect(screen.getByText("Store")).toBeInTheDocument();
        expect(screen.getByText("Vlog")).toBeInTheDocument();

        // Check if "About me" sections are rendered
        expect(screen.getAllByText("About me")).toHaveLength(2);
        expect(
            screen.getByText(
                "Welcome to our portfolio! We are passionate about creativity and innovation. Explore our work and discover how we can help bring your ideas to life."
            )
        ).toBeInTheDocument();
    });

    it("opens and closes the modal when an image is clicked", () => {
        render(<HomePage />);

        // Click on an image to open the modal
        const image = screen.getByAltText("IMG_5971");
        fireEvent.click(image);

        // Check if the modal is displayed with the correct image
        const modalImage = screen.getByAltText("Modal");
        expect(modalImage).toBeInTheDocument();
        expect(modalImage).toHaveAttribute("src", "/IMG/IMG_5971.JPG");

        // Click on the modal to close it
        fireEvent.click(modalImage.parentElement!.parentElement!);
        expect(modalImage).not.toBeInTheDocument();
    });

    it("renders all images in the gallery", () => {
        render(<HomePage />);

        // Check if all gallery images are rendered
        for (let i = 0; i < 4; i++) {
            const image = screen.getByAltText(`IMG_59${71 + i}`);
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute("src", `/IMG/IMG_59${71 + i}.JPG`);
        }
    });

    it("renders additional images and handles modal interactions", () => {
        render(<HomePage />);

        // Check additional images
        const photo2 = screen.getByAltText("Photo");
        expect(photo2).toBeInTheDocument();
        expect(photo2).toHaveAttribute("src", "/IMG/photo2.jpg");

        const photo3 = screen.getByAltText("Photo");
        expect(photo3).toBeInTheDocument();
        expect(photo3).toHaveAttribute("src", "/IMG/photo3.jpg");

        // Open modal for photo2
        fireEvent.click(photo2);
        const modalImage = screen.getByAltText("Modal");
        expect(modalImage).toBeInTheDocument();
        expect(modalImage).toHaveAttribute("src", "/IMG/photo2.jpg");

        // Close modal
        fireEvent.click(modalImage.parentElement!.parentElement!);
        expect(modalImage).not.toBeInTheDocument();
    });
});