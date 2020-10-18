import React, { useState } from "react";
import { Box, Button, Heading, Collapsible, ResponsiveContext, Layer } from "grommet";
import { FormClose, Notification } from "grommet-icons";

const Test = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const AppBox = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <div>
      <h1>Test Box</h1>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBox>
              AppBox
              <Heading level="3" margin="none">
                The Heading
              </Heading>
              <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBox>

            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </div>
  );
};

export default Test;
