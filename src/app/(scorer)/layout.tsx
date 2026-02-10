import ScorerLayout from "@/components/layout/ScorerLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ScorerLayout>
            {children}
        </ScorerLayout>
    );
}
