import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';

const App = () => {
    return (
        // <div className="ui container comments">

        //     <ApprovalCard>
        //         <div>
        //             <h4 style={{color: 'red'}}>This is a warning!</h4>
        //             Are you sure you want to continue?
        //         </div>
        //     </ApprovalCard>

        //     <ApprovalCard >
        //         <CommentDetail author="Sam"
        //                        timeAgo="May 2, 2020"
        //                        content="Mayorkun of Lagos is the real deal."
        //                        avatar={faker.image.avatar()}
        //         />
        //     </ApprovalCard>

        //     <ApprovalCard>
        //         <CommentDetail author="Alex"
        //                        timeAgo="May 3, 2020"
        //                        content="Can't wait for this pandemic to be over so as I can live my normal life."
        //                        avatar={faker.image.avatar()}
        //         />
        //     </ApprovalCard>

        //     <ApprovalCard>
        //         <CommentDetail author="Jane"
        //                        timeAgo="Just now"
        //                        content="I have to become conversant in React."
        //                        avatar={faker.image.avatar()}
        //         />
        //     </ApprovalCard>

        // </div>

        // <div>
        //     <Message header="Changes in Service"
        //              text="We just updated our privacy policy here to better service with our customers."
        //     />
        // </div>

        <div>
            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add document</div>
            </Segment>
            <Segment>
                <h4 className="ui header">For Your Information</h4>
                <p>Please find below Undertaking collection performance for April 2020 only. 
                    This report does not form the basis for MPR ranking – 
                    the MPR ranking is based on the Target Weighting Model.</p>
            </Segment>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));