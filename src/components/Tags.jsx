const Tags = () => {
    const items = [
        'git',
        'docker',
        'nginx',
        'sql',
        'rest',
        'redis',
        'mvc',
        'react',
        'ооп',
        'solid',
        'dry',
        'kiss',
        'websocket',
        'ajax',
        'html',
        'css',
        'scss',
        'phpstorm',
        'linux',
        'http',
    ]

    return (
        <div className="tags">
            {items.map((item, i) => <div className="tag" key={'tag-'+i}>#{item}</div>)}
        </div>
    );
};

export default Tags;