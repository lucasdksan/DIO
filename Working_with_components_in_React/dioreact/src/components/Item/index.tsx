type ItemProps = {
    text: string;
    link: string;
}

const Item = ({ text, link }: ItemProps)=>{
    return(
        <a href={link} className="list-group-item list-group-item-action">{text}</a>
    );
}

export default Item;