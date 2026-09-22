export default function Title({ type, value }) {
    const Tag = type || 'h2';
    return (
        <Tag className={`title-${type}`}>{value}</Tag>
    );
}