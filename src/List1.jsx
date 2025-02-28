import PropTypes from 'prop-types';

function List1(props) {
    const { category, items } = props;
    const list1Items = items.map(item => (
        <li key={item.id}>
            {item.name}:&nbsp;
            <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{list1Items}</ol>
        </>
    );
}

List1.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    )
};

List1.defaultProps = {
    category: 'Category',
    items: []
};

export default List1;
