import { useState, useEffect } from "react";
import styled from "styled-components";
import EditNewsForm from "../../components/editForm";
import ReactPaginate from "react-paginate";

const Blogpost = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [selectedBlogs, setSelectedBlogs] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlogsList(data));
  }, []);

  const handleEdit = (news) => {
    setSelectedBlogs(news);
  };

  useEffect(() => {
    console.log("form updated");
  }, [selectedBlogs]);

  const handleDelete = (id) => {
    setBlogsList((prevList) => prevList.filter((news) => news.id !== id));
    setSelectedBlogs(null);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedBlogs = blogsList.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div>
        {selectedBlogs ? (
          <EditNewsForm
            selectedBlogs={selectedBlogs}
            setSelectedBlogs={setSelectedBlogs}
          />
        ) : (
          <EditNewsForm setSelectedBlogs={setSelectedBlogs} />
        )}
      </div>
      <AdminContainer>
        {paginatedBlogs.map((news) => (
          <NewsCard key={news.id}>
            <CardImage src="https://via.placeholder.com/300" alt="Card" />
            <CardTitle>{news.title}</CardTitle>
            <CardBody>
              {news.body.length > 150
                ? `${news.body.slice(0, 150)}...`
                : news.body}
            </CardBody>
            <CardActions>
              <ActionButton onClick={() => handleEdit(news)}>Edit</ActionButton>
              <ActionButton2 onClick={() => handleDelete(news.id)}>
                Delete
              </ActionButton2>
            </CardActions>
          </NewsCard>
        ))}
      </AdminContainer>
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(blogsList.length / itemsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </div>
  );
};

export default Blogpost;

const AdminContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  font-size: 90%;
  max-width: 300px;
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0 0;
  padding: 0 1.2rem;
`;

const CardBody = styled.p`
  padding: 0 1.2rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.div`
  color: ${({ theme }) => theme.colors.button};
  text-align: start;
  font-weight: bolder;
  border: none;
  border-radius: 3px;
  padding: 0 1.2rem 2rem;
  cursor: pointer;
`;

const ActionButton2 = styled.div`
  color: red;
  text-align: start;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  padding: 0 1.2rem 2rem;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 5px;

      a {
        padding: 5px 10px;
        background-color: ${({ theme }) => theme.colors.button};
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
