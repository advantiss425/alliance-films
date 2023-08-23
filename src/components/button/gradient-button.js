import React, { Component } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import styles from "./gradient-button.style";
import LinearGradient from "react-native-linear-gradient";

class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  renderContent = () => {
    var {
      disabled,
      disabledButton=true,
      loading,
      colors=["#61a8e6", "#031a68"],
      containerStyle,
    } = this.props;

    return (
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.container,
          containerStyle,
          (disabled && disabledButton) ? styles.buttonDisabled : {},
        ]}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"white"} />
        ) : (
          this.props.children
        )}
      </LinearGradient>
    );
  };

  render() {
    var { onPress, disabled, loading } = this.props;

    return (
      <TouchableOpacity disabled={loading || disabled} onPress={onPress} activeOpacity={0.8}>
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}

export default GradientButton;
