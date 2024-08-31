'use client'
import allData from "@/util/blog.json"
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"
import PostCard1 from "./PostCard1"
import PostCard2 from "./PostCard2"
import PostCard3 from "./PostCard3"
import PostCard4 from "./PostCard4"
import PostCard5 from "./PostCard5"
import PostCard6 from "./PostCard6"
import PostCard7 from "./PostCard7"
import PostCard8 from "./PostCard8"
import PostCard9 from "./PostCard9"
import PostCard10 from "./PostCard10"
import PostCard11 from "./PostCard11"

export default function BlogPost({ style, showItem, showPagination, startFrom, toEnd }) {
    const data = allData.slice(startFrom, toEnd)
    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = showItem,
        paginationItem = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(data.length / limit))

    useEffect(() => {
        cratePagination()
    }, [limit, pages, data.length])

    const cratePagination = () => {
        let arr = new Array(Math.ceil(data.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit
    const getPaginatedProducts = data.slice(startIndex, endIndex)

    let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    let end = start + paginationItem
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }

    return (
        <>
            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {getPaginatedProducts.map(post => (
                <React.Fragment key={post.id}>
                    {!style && <PostCard1 post={post} />}
                    {style === 1 && <PostCard1 post={post} />}
                    {style === 2 && <PostCard2 post={post} />}
                    {style === 3 && <PostCard3 post={post} />}
                    {style === 4 && <PostCard4 post={post} />}
                    {style === 5 && <PostCard5 post={post} />}
                    {style === 6 && <PostCard6 post={post} />}
                    {style === 7 && <PostCard7 post={post} />}
                    {style === 8 && <PostCard8 post={post} />}
                    {style === 9 && <PostCard9 post={post} />}
                    {style === 10 && <PostCard10 post={post} />}
                    {style === 11 && <PostCard11 post={post} />}
                    
                    
                </React.Fragment>
            ))}
            <br />
            {showPagination &&
                <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}



// 'use client'
// import allData from "@/util/blog.json"
// import React, { useEffect, useState } from "react"
// import Pagination from "./Pagination"
// import PostCard1 from "./PostCard1"
// import PostCard2 from "./PostCard2"
// import PostCard3 from "./PostCard3"
// import PostCard4 from "./PostCard4"
// import PostCard5 from "./PostCard5"
// import PostCard6 from "./PostCard6"
// import PostCard7 from "./PostCard7"
// import PostCard8 from "./PostCard8"
// import PostCard9 from "./PostCard9"
// import PostCard10 from "./PostCard10"
// import PostCard11 from "./PostCard11"

// export default function BlogPost({ style, showItem, showPagination, startFrom, toEnd }) {
//     const data = allData.slice(startFrom, toEnd)
//     let [currentPage, setCurrentPage] = useState(1)
//     let showLimit = showItem,
//         paginationItem = 4

//     let [pagination, setPagination] = useState([])
//     let [limit, setLimit] = useState(showLimit)
//     let [pages, setPages] = useState(Math.ceil(data.length / limit))

//     useEffect(() => {
//         cratePagination()
//     }, [limit, pages, data.length])

//     const cratePagination = () => {
//         // set pagination
//         let arr = new Array(Math.ceil(data.length / limit))
//             .fill()
//             .map((_, idx) => idx + 1)

//         setPagination(arr)
//         setPages(Math.ceil(data.length / limit))
//     }

//     const startIndex = currentPage * limit - limit
//     const endIndex = startIndex + limit
//     const getPaginatedProducts = data.slice(startIndex, endIndex)


//     let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
//     let end = start + paginationItem
//     const getPaginationGroup = pagination.slice(start, end)

//     const next = () => {
//         setCurrentPage((page) => page + 1)
//     }

//     const prev = () => {
//         setCurrentPage((page) => page - 1)
//     }

//     const handleActive = (item) => {
//         setCurrentPage(item)
//     }
//     return (
//         <>
//             {getPaginatedProducts.length === 0 && (
//                 <h3>No Products Found </h3>
//             )}

//             {getPaginatedProducts.map(post => (
//                 <React.Fragment key={post.id}>
//                     {!style && <PostCard1 post={post} />}
//                     {style === 1 && <PostCard1 post={post} />}
//                     {style === 2 && <PostCard2 post={post} />}
//                     {style === 3 && <PostCard3 post={post} />}
//                     {style === 4 && <PostCard4 post={post} />}
//                     {style === 5 && <PostCard5 post={post} />}
//                     {style === 6 && <PostCard6 post={post} />}
//                     {style === 7 && <PostCard7 post={post} />}
//                     {style === 8 && <PostCard8 post={post} />}
//                     {style === 9 && <PostCard9 post={post} />}
//                     {style === 10 && <PostCard10 post={post} />}
//                     {style === 11 && <PostCard11 post={post} />}
//                 </React.Fragment>
//             ))}
//         <br />
//             {showPagination &&
//                 <Pagination
//                     getPaginationGroup={
//                         getPaginationGroup
//                     }
//                     currentPage={currentPage}
//                     pages={pages}
//                     next={next}
//                     prev={prev}
//                     handleActive={handleActive}
//                 />
//             }
//         </>
//     )
// }