import groq from 'groq';

export const siteConfigQuery = groq`
  *[_id == "global-config"][0] {
    title,
    frontPage->{
    	content,
    	description,
    	openGraphImage,
  	},
    primaryNavigation[]->{
      _id,
    	slug{
      	current
    	},
			page-> {
        title
      }
  	},
    secondaryNavigation[]->{
      _id,
    	slug{
      	current,
    	},
			page->{
        title
      },
  	},
    logo,
  }
`;

export const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0] {
    page -> {
      content[]{
        _type,
        _key,
        title,
        backgroundImage
      },
			title,
			openGraphImage
    }
}
`;

// *[_type == "route" && slug.current == $slug][0] {
//   page-> {
//     content[] {
//       _type,
//       _key,
//       backgroundImage,
//       title,
//       tagline,
//       label,
//       text,
//       image,
//       columnContent[]{
//           ...,
//           internalPrimary->{
//             ...,
//           }
//         },
//       route
//       alt,
//     },
//     title,
//     openGraphImage
//   }
// }
