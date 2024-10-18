import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
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
          <HStack color='black.80'>
            <Text fontSize='14px'>Total Portfolio value</Text>
            <Icon as={IoMdInformationCircleOutline} />
          </HStack>
          <HStack>
            <Text textStyle='h2' fontWeight='medium'>$12458</Text>
          </HStack>
        </Stack>
        <Stack >
          <HStack spacing={4}
            align={{
              base: 'flex-start',
              sm: 'center'
            }}
            flexDir={{
              base: 'column',
              sm: 'row'
            }}
          >
            <HStack color='black.80'>
              <Text fontSize='14px'>Wallet Balance</Text>
            </HStack>
            <HStack>
              <Text textStyle='h2' fontWeight='medium'>$123,245</Text> <Tag colorScheme='gray'>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle='h2' fontWeight='medium'>$123,245</Text> <Tag colorScheme='gray'>INR</Tag>
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
