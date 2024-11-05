import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import HomePage from "@/pages/index";
//import Layout from "@/components/Layout";

describe("Prueba inicial", () => {
    it("renders home page", () => {
        render(<HomePage/>);
        const text = screen.getByText('Shork Url');
        expect(text).toBeInTheDocument();
    });
});

