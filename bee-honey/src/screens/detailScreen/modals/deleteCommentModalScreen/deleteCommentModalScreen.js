import React from 'react';
import './deleteCommentModalScreen.css';
import TopBarDeleteModal from './components/topBarDeleteModal/topBarDeleteModal.js';
import CommentForErase from './components/commentForErase/commentForErase';

class DeleteCommentModalScreen extends React.Component {
    render() {
        return (
            <div className='deleteCommentModalScreen'>
                <TopBarDeleteModal />
                <CommentForErase />
            </div>
        )
    }
}

export default DeleteCommentModalScreen;