import React from "react";

const SpecificCard = ({ name, id }) => {
  const profession = {
    16:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    17:"https://www.towerdental.com.au/uploads/170/46/Untitled-design-49.png",
    18:"https://amrak.lk/wp-content/uploads/2022/05/What-are-the-qualifications-to-be-a-nurse-1.jpg",
    12:"https://ucompensar.edu.co/wp-content/uploads/2021/05/ingenieria-industrial-ucompensar-2023.jpg",
    13:"https://www.informa-mea.com/wp-content/uploads/2018/08/secretary.jpg",
    15:"https://online.champlain.edu/sites/online/files/styles/width_1600/public/2021-03/online-colleges-accounting-degree-blog5-1900x900.jpg?itok=7PERnqbu",
    14:"https://i.ytimg.com/vi/RdQekSP2DoA/maxresdefault.jpg",
    9: "https://s3media.angieslist.com/s3fs-public/housekeeper-cleaning-kitchen-countertop.jpeg?impolicy=leadImage",
    6:"https://storage-prtl-co.imgix.net/endor/articles/1791/images/1541598853_shutterstock_195967022.jpg?w=1440&h=575&fit=crop&auto=format",
    
    11:"https://assets.everspringpartners.com/dims4/default/4fda2cb/2147483647/strip/true/crop/1000x667+0+0/resize/800x534!/format/webp/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.amazonaws.com%2F40%2F7c%2Face237c74e66880a6343917b2eae%2Fautomotive-engineer.jpg",
    10:"https://www.build-review.com/wp-content/webp-express/webp-images/uploads/2021/03/Civil-engineers-1536x864.jpg.webp",
    
    7:"https://www.build-review.com/wp-content/webp-express/webp-images/uploads/2021/03/Plumbing-1536x864.jpg.webp",
    8:"https://res.cloudinary.com/hnpb47ejt/image/upload/v1546474781/nm4gxoed86ytqkjqevcb.jpg",
       
    4:"https://myhomey.in/img/tv-repair-bangalore.jpg",
    5:"https://www.servicepower.com/hs-fs/hubfs/appliance%20repair%20scheduling%20software.jpg?width=691&name=appliance%20repair%20scheduling%20software.jpg",
    2:"https://www.techdonut.co.uk/sites/default/files/styles/landing_pages_lists_250/public/production/image/website-design-software-5036405501.jpg?itok=GUYKLLOy",
    3:"https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/The-5-Biggest-Data-Science-Trends-In-2022/960x0.jpg?format=jpg&width=960",
    1:"https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08-850x412.jpg"
  }

  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src={profession[id] || "https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2014/01/descripcion-categorias-wordpress.png?fit=666%2C370&quality=100&strip=all&ssl=1"}
          alt={name || "profession"}
          className="card-img-top object-fit-contain"
          style={{
            height: "200px",
            margin: "0",
            padding: "0",
            borderRadius: "0",
          }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <a
          href={`/categories/profession/professionals/${id}`}
          className="btn btn-outline-secondary rounded-0"
        >
          See Professionals
        </a>
      </div>
    </div>
  );
};

export default SpecificCard;
