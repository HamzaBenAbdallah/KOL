import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                // only render the first 4 items from the array
                .filter((item, index) => index < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
        </div>
    </div>
);

export default CollectionPreview;