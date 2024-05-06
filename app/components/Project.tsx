interface ProjectProps {
    title: string;
    description: string;
};

export default function Project({ title, description }: ProjectProps) {
    return (
        <div className="p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    );
}