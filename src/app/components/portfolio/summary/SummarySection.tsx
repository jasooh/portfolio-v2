import { ReactNode } from "react";

interface SummaryProps {
    children: ReactNode
}

export default function SummarySection({ children }:SummaryProps) {
    return (
        <p id="summary">
            { children }
        </p>
    );
};