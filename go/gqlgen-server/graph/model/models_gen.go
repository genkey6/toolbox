// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type Animal struct {
	Name    string   `json:"name"`
	Classis *Classis `json:"classis"`
}

type AnimalInput struct {
	Name    string        `json:"name"`
	Classis *ClassisInput `json:"classis"`
}

type Classis struct {
	Name string `json:"name"`
}

type ClassisInput struct {
	Name string `json:"name"`
}

type Mutation struct {
}

type Query struct {
}

type Zoo struct {
	Name    string    `json:"name"`
	Area    Area      `json:"area"`
	Animals []*Animal `json:"animals"`
}

type ZooInput struct {
	Name    string         `json:"name"`
	Area    Area           `json:"area"`
	Animals []*AnimalInput `json:"animals"`
}

type Area string

const (
	AreaTohoku     Area = "TOHOKU"
	AreaKanto      Area = "KANTO"
	AreaKoshinetsu Area = "KOSHINETSU"
	AreaHokuriku   Area = "HOKURIKU"
	AreaTokai      Area = "TOKAI"
	AreaKinki      Area = "KINKI"
	AreaChugoku    Area = "CHUGOKU"
	AreaShikoku    Area = "SHIKOKU"
	AreaKyusyu     Area = "KYUSYU"
)

var AllArea = []Area{
	AreaTohoku,
	AreaKanto,
	AreaKoshinetsu,
	AreaHokuriku,
	AreaTokai,
	AreaKinki,
	AreaChugoku,
	AreaShikoku,
	AreaKyusyu,
}

func (e Area) IsValid() bool {
	switch e {
	case AreaTohoku, AreaKanto, AreaKoshinetsu, AreaHokuriku, AreaTokai, AreaKinki, AreaChugoku, AreaShikoku, AreaKyusyu:
		return true
	}
	return false
}

func (e Area) String() string {
	return string(e)
}

func (e *Area) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Area(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Area", str)
	}
	return nil
}

func (e Area) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
