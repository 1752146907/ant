import React from 'react';
import { Pagination } from 'antd';

class Paginations extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }

    render(){
        return <div style={{ width: "480px" , margin: "0 auto"}} >
            <Pagination
                total={185}
                pageSize={2}
                defaultPageSize={10}
                pageSizeOptions={['10', '20', '30']}
                showQuickJumper={true}
                defaultCurrent={1}
            />
        </div>
    }
}

export default Paginations;




