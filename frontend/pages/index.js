import { useState } from 'react';
import { getAlchemyInfo } from '@/components/interfaces';
import { Card, 
  Button, 
  Col, 
  Row, 
  Container, 
  Text, 
  Grid, 
  Input } from '@nextui-org/react';

export default function Home() {
const [nfts, getNfts] = useState([]);

 async function fetchNfts() {
   let wallet = document.getElementById("wallet").value.toString()
   const nftdata = await getAlchemyInfo(wallet);
   const nftArray = nftdata.ownedNfts
   const outArray = [];
    nftArray.forEach(nft => {
     let token = nft.tokenId;
     let name = nft.rawMetadata.title;
     let imagePath = nft.rawMetadata.image;
       if (imagePath == undefined) {
        return;
       } else {
         let desc = nft.description;
         let img = imagePath.replace("ipfs://", "https://ipfs.io/ipfs/");
         let nftdata = {
             name: name,
             img: img,
             tokenId: token,
             desc: desc,
           };
           outArray.push(nftdata);
           console.log(nftdata)
       }
      });
   getNfts(outArray);
 }



return (
<div>
<Container md="true">
 <Row>
    <Col css={{ size: "$50", paddingLeft: "$10", paddingTop: "$1" }}>
      <Card css={{ p: "$3", backgroundColor: "$blue200", boxShadow:'0px 0px 4px #ffffff' }}>
          <Card css={{ p: "$3", marginTop:'$1'}}>
        <Row>
          <Input size='lg' width='400px' id="wallet"/>
          <Button
            size="sm"
            color="gradient"
            css={{ marginRight:'4px' }}
            onPress={fetchNfts}
          >
          Retrieve NFTs
          </Button>
        </Row>
        </Card>
      </Card>
    </Col>
  </Row>
  <Row>
    <Grid.Container gap={3}>
      {nfts.map((nft, i) => {
          return (
            <Grid key={i}>
                <Card
                  isHoverable
                  css={{ mw: "240px", marginRight: "$1" }}
                  variant="bordered"
                  key={i}
                  value={i}
                >
                  <Card.Image src={nft.img} />
                  <Card.Body md="true">
                    <h5
                      style={{
                        color: "#9D00FF",
                        fontFamily: "SF Pro Display",
                      }}
                    >
                    {nft.contract}
                    </h5>
                    <Text h6>
                      {nft.name} Token-{nft.tokenId}
                    </Text>
                    <Text css={{fontSize:'$sm'}}>{nft.desc}</Text>
                  </Card.Body>
                </Card>
            </Grid>
          );
        })}
    </Grid.Container>
  </Row> 
</Container>
</div>
)
}