import React from "react";
import Login from "../../front-end/components/login";
import { render, screen, fireEvent} from "@testing-library/react";

describe("Login component", () => {
    test("renders login component", () => {
        render(<Login/>);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    test("submit form data", () => {
        const{ getByLabelText, getByText } = render(<Login/>);
        const usernameInput = getByLabelText(/username/i);
        const passwordInput = getByLabelText(/password/i);
        const loginButton = getByText(/login/i);
        fireEvent.change(usernameInput, { target: { value: "testuser" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword" }});
        fireEvent.click(loginButton);
        expect((usernameInput as HTMLInputElement).value).toBe("testuser");
        expect((passwordInput as HTMLInputElement).value).toBe("testpassword");
    });
});