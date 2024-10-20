import React from 'react'
import {
  AiOutlineInfoCircle,

} from "react-icons/ai";

import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { HStack, Stack, Text, Icon, Tag, Button } from '@chakra-ui/react'

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius='xl'
      p='6'
      justify='space-between'
      align={{
        base: 'flex-start',
        xl: 'center'
      }}
      flexDir={{
        base: 'column',
        xl: 'row'
      }}
      spacing={{
        base: 4,
        xl: 0
      }}
    >

      <HStack
        spacing={{
          base: 0,
          xl: 16
        }}
        align={{
          base: 'flex-start',
          xl: 'center'
        }}
        flexDir={{
          base: 'column',
          xl: 'row'
        }}

      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposite</Button>
        <Button leftIcon={<Icon as={FaArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection
