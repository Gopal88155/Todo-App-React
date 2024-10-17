const listItem = () => {
    return (

        <li className="list-group-item rounded-0 ">
        Text Here
        <span className="float-end">
            <button className="btn btn-warning btn-sm rounded-0 ">Edit</button>
            <button className="btn btn-danger btn-sm rounded-0">Delete</button>
        </span>
    </li>

    )
}

export default listItem