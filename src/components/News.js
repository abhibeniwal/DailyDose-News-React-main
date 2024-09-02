import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  const updateNews = async()=>{
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
      props.setProgress(60);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    
    useEffect(()=>{
      document.title = `DailyDose News | ${capitalizeFirstLetter(props.category)}`;
      updateNews();
      // eslint-disable-next-line
  },[])

    
  const fetchMoreData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page+1);
  }
  
    return (
    <div className="container my-3">
        <h1 style={{marginTop: '70px'}}>DailyDose | Headlines - {props.heading}</h1>
        {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
          }
        >

        <div className="container">
        <div className=" row container">
          {articles.map((element)=>{
            return  <div className='col-md-4' style={{margin: "20px 0px"}} key = {element.url}>
            <NewsItem title = {element.title ? element.title.slice(0,65) : ""} description = {element.description ? element.description.slice(0,88) : "Not Available"} imageUrl ={element.urlToImage} newsUrl = {element.url} time = {element.publishedAt} author={element.author?element.author: "Unknown"} source = {element.source.name}/>
          </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
}

News.deafultProps = {
  pageSize: 6,
  category: "general",
  country: "in"
}

export default News;