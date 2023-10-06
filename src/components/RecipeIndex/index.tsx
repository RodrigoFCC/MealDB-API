import { CardLetters, IndexContainer } from './styles'

type Props = {
  alphaIndex: (item: string) => void
}

const RecipeIndex = ({ alphaIndex }: Props) => {
  const alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'J',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  return (
    <>
      <IndexContainer className="container">
        {alpha.map((item, index) => {
          return (
            <CardLetters key={index} onClick={() => alphaIndex(item)}>
              <h3>{item}</h3>
            </CardLetters>
          )
        })}
      </IndexContainer>
    </>
  )
}

export default RecipeIndex
