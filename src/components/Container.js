import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import useStore from "../Store/store";
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
import Catagories from "./Catagories";
import WriteBlogs from "./WriteBlogs";
import getAllBlogs from "../utils/getAllBlogs";

function Container() {
    const store = useStore();
    const writeBlog = store.writeBlog;
    const setWriteBlog = store.setWriteBlog;
    const setDetailBlogs = store.setDetailBlogs;
    const detailBlogs = store.detailBlogs;
    let MusicList = [];
    for (let i = 0; i < 5; i++) {
        MusicList[i] = i + 10;
    }
    const [allBlogs, setAllBlogs] = useState([])
    const ABI = abi.abi;
    const fetchBlogs = async () => {
        const blogs = await getAllBlogs();
        setAllBlogs(blogs);
        setDetailBlogs(blogs);
    };
    useEffect(() => {
        fetchBlogs();
    }, [])
    useEffect(() => {
        setDetailBlogs(allBlogs)
    }, [allBlogs])

    return (
        <div className='bg-white flex-1 overflow-y-scroll Scroll px-8 py-6 relative'>
            {/* <Catagories /> */}
            {/* <div className="text-3xl mt-8 text-white">Recent Blogs</div><br /> */}
            <div className="w-full flex flex-row flex-wrap min-h-screen justify-center gap-x-6 overflow-y-scroll Scroll">
                {
                    allBlogs && allBlogs.map((item, index) => {
                        return <Link to={`/blog/${index}`}>
                            <BlogCard key={index} index={index} blogdata={item} />
                        </Link>
                    })
                }
            </div>
            <WriteBlogs show={writeBlog ? 1 : 0} onClickOutside={() => setWriteBlog(false)} onBlogPublished={fetchBlogs} />
        </div >
    )
}

export default Container