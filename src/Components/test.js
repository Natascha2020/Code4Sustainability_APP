/* <div>
      <h1>Project Details</h1>
      {projectDetails && !projectDetails.isEmpty ? (
        <div>
          <Box height="medium" width="medium" overflow="hidden">
            <Card height="medium" width="medium" background="light-1">
              <CardBody>
                <Carousel fill alignSelf="center">
                  <div className="carouselInput">
                    <div>Name: {projectDetails.name}</div>
                    <div>Location: {projectDetails.location}</div>
                    <div>Webpage: {projectDetails.webpage}</div>
                  </div>
                  <div className="carouselInput">Image: {projectDetails.image}</div>
                  <div className="carouselInput">
                    <h4>Nice to know...</h4>
                    <h5>No.1</h5>
                    <div>{projectDetails.question1}</div>
                    <div>{projectDetails.answer1}</div>
                  </div>
                  <div className="carouselInput">
                    <h4>Nice to know...</h4>
                    <h5>No.2</h5>
                    <div>{projectDetails.question2}</div>
                    <div>{projectDetails.answer2}</div>
                  </div>
                  <div className="carouselInput">
                    <h4>Nice to know...</h4>
                    <h5>No.3</h5>
                    <div>{projectDetails.question3}</div>
                    <div>{projectDetails.answer3}</div>
                  </div>

                  <Video controls="over" fit="contain">
                    <source key="video" src="//v2.grommet.io/assets/small.mp4" type="video/mp4" />
                    <track key="cc" label="English" kind="subtitles" srcLang="en" src="/assets/small-en.vtt" default={true} />
                  </Video>
                </Carousel>
              </CardBody>
              <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <Box direction="row" gap="medium">
                  <Button
                    type="submit"
                    primary
                    label="Let's connect!"
                    margin="medium"
                    onClick={(e) => {
                      handleConnect(e);
                    }}
                  />
                </Box>
              </CardFooter>
            </Card>
          </Box>
        </div>
      ) : (
        <div>Error</div>
      )}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div> */
