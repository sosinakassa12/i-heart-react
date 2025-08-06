import HeartSVG from "./HeartSVG";

const colors = [
  "#FFB7CE", // Cotton Candy Pink
  "#FF69B4", // Bubblegum Pink
  "#FFFACD", // Lemon Drop Yellow
  "#98FF98", // Mint Green
  "#FFDAB9", // Peach Fizz
  "#ADD8E6", // Baby Blue
  "#E6E6FA", // Lavender Blush
  "#D8B7DD", // Grape Soda
  "#87CEEB", // Sky Blue
  "#FFB347", // Orange Sherbet
  "#B0EACD", // Pistachio Cream
  "#F7CAC9", // Rose Quartz
  "#A9CCE3", // Blueberry Cream
  "#FAF884", // Banana Milk
  "#CBAACB"  // Candy Violet
];
const CandyColoredHeart = (props) => {
 const randomColor = colors[Math.floor(Math.random() * colors.length)]

 return(
    <div className='heart'>
        <div className='heart-img'>
            <HeartSVG col={randomColor} />
        </div>
        <p className='heart-message'> {props.msg} </p>
    </div>
 )
}
export default CandyColoredHeart;