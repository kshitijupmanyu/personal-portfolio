import React from 'react'
import { Badge, Box, Image } from '@chakra-ui/react';

function Work(props) {
  return (
    <div>
      <Box boxShadow="2xl" margin={10} maxW="md" borderWidth="1px" borderRadius="xl" overflow="hidden">
        <Image src={props.image} />
        {props.badge && <Badge mt='5' ml='5' borderRadius='full' px='4' colorScheme='teal'>
            Under Development
          </Badge>}
        <Box p='5'>
          <Box
            fontWeight="semibold"
            fontSize="larger"
            lineHeight="tight"
            isTruncated
          >
            {props.name}
          </Box>

          <Box fontSize="small">
            {props.description}
          </Box>

        </Box>
      </Box>
    </div>)
}

export default Work
