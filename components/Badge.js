const Badge = ({ text }) => {
	return (
		<span className="inline-flex items-center rounded-md border-2 border-muted-1 bg-transparent px-2 py-1 font-semibold text-heading shadow-sm">
			{text}
		</span>
	);
};

export default Badge;
