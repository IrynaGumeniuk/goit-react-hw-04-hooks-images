import React, { Component } from "react";
import fetchImages from "./services/api";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    listImages: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {


      return fetchImages(this.state.searchQuery, 1)
        .then((data) => {
          this.setState({ listImages: data, page: 1 });
        })
        .catch((err) => console.log("Error:", err));
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {

      return fetchImages(this.state.searchQuery, this.state.page)
        .then((data) => {
          this.setState((prevState) => ({
            listImages: [...prevState.listImages, ...data],
          }));
        })

        .catch((err) => console.log("Error:", err));
    }
  }

  handleSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  };

  openModal = (imageURL) => {
    this.setState({ largeImage: imageURL, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { listImages, loading, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {listImages && (<ImageGallery listImages={listImages} onClick={this.openModal} />)}
        {loading && <Loader />}
        {listImages && <Button onClick={this.loadMore} />}
        {showModal && (<Modal url={this.state.largeImage} onClose={this.onClose} />)}
      </>
    );
  }
}

export default App;