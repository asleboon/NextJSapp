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
*[_type == "route" && slug.current == $slug][0]{
    page->{
    	content[]->{
        _type,
        _key,
        title,
        backgroundImage,
        products[]->{
          fullPrice,
          fullPriceDescription,
          installmentPrice,
          installmentPriceDescription,
          productImages[]{
            ...,
          },
					title,
        },
        route->{
        	slug{
        		current
      		}
      	}
      },
    title,
    openGraphImage
  	}
  }
`;

// *[_type == "route" && slug.current == "tjenester/strom/produkter"][0]{
//   page->{
//     content[]{
//       _type,
//       _key,
//       title,
//       backgroundImage,
//       listContent[]{
// fullPrice,
// fullPriceDescription,
// installmentPrice,
// installmentPriceDescription,
//           productImages[]{
//             ...,
//         },
//       },
//       route->{
//         slug{
//           current
//         }
//       }
//     },
//   title,
//   openGraphImage
//   }
// }

// *[_type == "list"][0]{
//   listContent[]->{
//     fullPrice,
//     fullPriceDescription,
//     installmentPrice,
//     installmentPriceDescription,
//     productImages[]{
//       ...,
//     },
//   }
// }
