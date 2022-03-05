import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>instruction</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text delete style={styles.text}>
              wallet can transfer erc20 token~
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete style={styles.text}>
              Dex can exchange token
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text delete={isServerInfo} style={styles.text}>
              NFT can see your
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text delete={isServerInfo} style={styles.text}>

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔏">
            <Text delete={isServerInfo} style={styles.text}>

            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>

            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <Text delete={isServerInfo} style={styles.text}>

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete={isInchDex} style={styles.text}>

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>BUIDL!!!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain </Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>

              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                also can Start you local devchain to use it
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{" "}
              <Text strong> Develop by Donald </Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>

              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                this is my first DAPP
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Add contract
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
