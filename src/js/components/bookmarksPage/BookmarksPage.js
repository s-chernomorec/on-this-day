import React, {Component} from 'react';

import PageWrapper from '../common/PageWrapper';
import Frame from '../common/Frame';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Bookmark from './Bookmark';
import helpers from "../../helpers";

const {sortByMonth, LS} = helpers;

class BookmarksPage extends Component {
  constructor() {
    super();

    this.state = {
      bookmarks: LS.get('bookmarks') || []
    };

    this.removeBookmark = this.removeBookmark.bind(this);
  }

  removeBookmark(text) {
    const newBookmarks = this.state.bookmarks.filter(item => item.text !== text);
    LS.set('bookmarks', newBookmarks);
    this.setState({bookmarks: newBookmarks});
  }

  render() {
    return (
      <PageWrapper customClass="bookmarks">
        <Header />
        {this.state.bookmarks.length !== 0
          ? <Frame frameWrapperClass="bookmarks-content-wrapper" customClass="bookmarks-content">
              {
                this.state.bookmarks.sort(sortByMonth).map((item, i) => (
                  <Bookmark item={item} key={i} removeBookmark={this.removeBookmark} />
                ))
              }
            </Frame>
          : <Frame frameWrapperClass="bookmarks-content-wrapper" customClass="bookmarks-placeholder">
              <span>You haven't saved any bookmarks yet.</span>
            </Frame>
        }
        <Footer />
      </PageWrapper>
    );
  }
}

export default BookmarksPage;
