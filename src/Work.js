import React from 'react'
import { Badge, Box, Image } from '@chakra-ui/react';

function Work(props) {
  return (
    <div>
      <Box boxShadow="2xl" margin={20} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={props.image} />

        <Box p="6">
          <Box
            mt="10px"
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
